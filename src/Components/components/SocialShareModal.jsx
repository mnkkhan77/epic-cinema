import { useState } from 'react';

const SocialShareModal = ({ url }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const shareOnFacebook = () => {
        const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        window.open(shareUrl, '_blank');
        closeModal();
    };

    const shareOnTwitter = () => {
        const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
        window.open(shareUrl, '_blank');
        closeModal();
    };

    return (
        <div>
            <button className="btn btn-primary" onClick={openModal}>
                Share
            </button>

            {modalOpen && (
                <div className="modal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Share on Social Media</h5>
                                <button type="button" className="close" onClick={closeModal}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <button className="btn btn-primary" onClick={shareOnFacebook}>
                                    Share on Facebook
                                </button>
                                <button className="btn btn-info" onClick={shareOnTwitter}>
                                    Share on Twitter
                                </button>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SocialShareModal;
